param(
    [string]$AssetDir = (Join-Path $PSScriptRoot "..\assets\valkyries"),
    [string]$OutputDir = (Join-Path $PSScriptRoot "..\release-media")
)

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"

$items = @(
    @{ Id = "saber"; Label = "Saber" },
    @{ Id = "silver_wolf"; Label = "Silver Wolf" },
    @{ Id = "jeanne_alter"; Label = "Jeanne Alter" },
    @{ Id = "jingliu"; Label = "Jingliu" },
    @{ Id = "skirk"; Label = "Skirk" },
    @{ Id = "jinhsi"; Label = "Jinhsi" },
    @{ Id = "yae_miko"; Label = "Yae Miko" },
    @{ Id = "chisaki"; Label = "Chisaki" },
    @{ Id = "kafka"; Label = "Kafka" },
    @{ Id = "ye_shunguang"; Label = "Ye Shunguang" },
    @{ Id = "himeko"; Label = "Himeko" },
    @{ Id = "feixue"; Label = "Feixue" },
    @{ Id = "feixiao"; Label = "Feixiao" },
    @{ Id = "changli"; Label = "Changli" },
    @{ Id = "raiden_shogun"; Label = "Raiden Shogun" },
    @{ Id = "yixuan"; Label = "Yixuan" },
    @{ Id = "xilian"; Label = "Xilian" },
    @{ Id = "liuying"; Label = "Liuying" },
    @{ Id = "cartethyia"; Label = "Cartethyia" },
    @{ Id = "yuno"; Label = "Yuno" }
)

function New-RectF([float]$x, [float]$y, [float]$w, [float]$h) {
    return [System.Drawing.RectangleF]::new($x, $y, $w, $h)
}

function New-Rect([int]$x, [int]$y, [int]$w, [int]$h) {
    return [System.Drawing.Rectangle]::new($x, $y, $w, $h)
}

function New-Format([string]$align, [string]$lineAlign) {
    $format = [System.Drawing.StringFormat]::new()
    $format.Alignment = [System.Drawing.StringAlignment]::$align
    $format.LineAlignment = [System.Drawing.StringAlignment]::$lineAlign
    $format.Trimming = [System.Drawing.StringTrimming]::EllipsisCharacter
    return $format
}

function New-RoundedRectPath([System.Drawing.RectangleF]$rect, [float]$radius) {
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $diameter = $radius * 2
    $path.AddArc($rect.X, $rect.Y, $diameter, $diameter, 180, 90)
    $path.AddArc($rect.Right - $diameter, $rect.Y, $diameter, $diameter, 270, 90)
    $path.AddArc($rect.Right - $diameter, $rect.Bottom - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc($rect.X, $rect.Bottom - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    return $path
}

function Draw-RoundedPanel(
    [System.Drawing.Graphics]$g,
    [System.Drawing.RectangleF]$rect,
    [int]$radius,
    [System.Drawing.Color]$fill,
    [System.Drawing.Color]$stroke
) {
    $path = New-RoundedRectPath $rect $radius
    $brush = [System.Drawing.SolidBrush]::new($fill)
    $pen = [System.Drawing.Pen]::new($stroke, 2)
    $g.FillPath($brush, $path)
    $g.DrawPath($pen, $path)
    $brush.Dispose()
    $pen.Dispose()
    $path.Dispose()
}

function Draw-FitImage(
    [System.Drawing.Graphics]$g,
    [System.Drawing.Image]$image,
    [System.Drawing.RectangleF]$rect
) {
    $scale = [Math]::Min($rect.Width / $image.Width, $rect.Height / $image.Height)
    $w = [float]($image.Width * $scale)
    $h = [float]($image.Height * $scale)
    $x = [float]($rect.X + (($rect.Width - $w) / 2))
    $y = [float]($rect.Y + (($rect.Height - $h) / 2))
    $g.DrawImage($image, (New-RectF $x $y $w $h))
}

function Save-Jpeg([System.Drawing.Bitmap]$bitmap, [string]$path, [long]$quality) {
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object { $_.MimeType -eq "image/jpeg" } |
        Select-Object -First 1
    $encoder = [System.Drawing.Imaging.Encoder]::Quality
    $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
    $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new($encoder, $quality)
    $bitmap.Save($path, $codec, $parameters)
    $parameters.Dispose()
}

function New-Canvas([string]$subtitle) {
    $bitmap = [System.Drawing.Bitmap]::new(1920, 1080)
    $g = [System.Drawing.Graphics]::FromImage($bitmap)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

    $bounds = New-Rect 0 0 1920 1080
    $bg = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
        $bounds,
        [System.Drawing.Color]::FromArgb(19, 17, 14),
        [System.Drawing.Color]::FromArgb(42, 34, 25),
        32
    )
    $g.FillRectangle($bg, $bounds)
    $bg.Dispose()

    $veil = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(115, 0, 0, 0))
    $g.FillRectangle($veil, 0, 0, 1920, 1080)
    $veil.Dispose()

    $linePen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(55, 173, 129, 58), 2)
    for ($y = 164; $y -lt 1080; $y += 164) {
        $g.DrawLine($linePen, 92, $y, 1828, $y)
    }
    $linePen.Dispose()

    $titleFont = [System.Drawing.Font]::new("Georgia", 58, [System.Drawing.FontStyle]::Bold)
    $subtitleFont = [System.Drawing.Font]::new("Segoe UI", 25, [System.Drawing.FontStyle]::Regular)
    $smallFont = [System.Drawing.Font]::new("Segoe UI", 18, [System.Drawing.FontStyle]::Regular)
    $titleBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(248, 241, 224))
    $goldBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(212, 174, 105))
    $mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(185, 173, 151))

    $g.DrawString("Battle Valkyries", $titleFont, $titleBrush, 116, 54)
    $g.DrawString($subtitle, $subtitleFont, $goldBrush, 122, 132)
    $g.DrawString("20 recruitable Valkyries - English and Simplified Chinese packages", $smallFont, $mutedBrush, 122, 174)

    $titleFont.Dispose()
    $subtitleFont.Dispose()
    $smallFont.Dispose()
    $titleBrush.Dispose()
    $goldBrush.Dispose()
    $mutedBrush.Dispose()

    return @{ Bitmap = $bitmap; Graphics = $g }
}

function Draw-CardCollage([string]$outputPath) {
    $canvas = New-Canvas "Summon Portrait Collection"
    $g = $canvas.Graphics
    $centerFormat = New-Format "Center" "Center"
    $nameFont = [System.Drawing.Font]::new("Segoe UI Semibold", 15, [System.Drawing.FontStyle]::Bold)
    $nameBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(245, 239, 222))
    $bandBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(165, 15, 13, 10))
    $shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120, 0, 0, 0))
    $panelFill = [System.Drawing.Color]::FromArgb(78, 24, 21, 17)
    $panelStroke = [System.Drawing.Color]::FromArgb(145, 164, 124, 62)

    $rowCounts = @(7, 7, 6)
    $cardW = 180
    $cardH = 240
    $gapX = 34
    $gapY = 28
    $index = 0

    for ($row = 0; $row -lt $rowCounts.Count; $row++) {
        $count = $rowCounts[$row]
        $totalW = ($count * $cardW) + (($count - 1) * $gapX)
        $x0 = [int]((1920 - $totalW) / 2)
        $y = 234 + ($row * ($cardH + $gapY))

        for ($col = 0; $col -lt $count; $col++) {
            $item = $items[$index]
            $x = $x0 + ($col * ($cardW + $gapX))
            $panelRect = New-RectF ($x - 8) ($y - 8) ($cardW + 16) ($cardH + 16)
            $shadowRect = New-RectF ($x - 2) ($y + 8) ($cardW + 16) ($cardH + 16)
            $g.FillRectangle($shadowBrush, $shadowRect)
            Draw-RoundedPanel $g $panelRect 16 $panelFill $panelStroke

            $imagePath = Join-Path $AssetDir "$($item.Id)_card.png"
            $image = [System.Drawing.Image]::FromFile($imagePath)
            $g.DrawImage($image, (New-RectF $x $y $cardW $cardH))
            $image.Dispose()

            $bandRect = New-RectF $x ($y + $cardH - 38) $cardW 38
            $g.FillRectangle($bandBrush, $bandRect)
            $g.DrawString($item.Label, $nameFont, $nameBrush, $bandRect, $centerFormat)
            $index++
        }
    }

    $centerFormat.Dispose()
    $nameFont.Dispose()
    $nameBrush.Dispose()
    $bandBrush.Dispose()
    $shadowBrush.Dispose()
    $g.Dispose()
    Save-Jpeg $canvas.Bitmap $outputPath 92
    $canvas.Bitmap.Dispose()
}

function Draw-SkinCollage([string]$outputPath) {
    $canvas = New-Canvas "In-game Skin Collection"
    $g = $canvas.Graphics
    $centerFormat = New-Format "Center" "Center"
    $nameFont = [System.Drawing.Font]::new("Segoe UI Semibold", 16, [System.Drawing.FontStyle]::Bold)
    $nameBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(245, 239, 222))
    $shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(125, 0, 0, 0))
    $panelFill = [System.Drawing.Color]::FromArgb(82, 21, 19, 16)
    $panelStroke = [System.Drawing.Color]::FromArgb(150, 164, 124, 62)

    $rowCounts = @(7, 7, 6)
    $cellW = 210
    $cellH = 236
    $gapX = 26
    $gapY = 28
    $index = 0

    for ($row = 0; $row -lt $rowCounts.Count; $row++) {
        $count = $rowCounts[$row]
        $totalW = ($count * $cellW) + (($count - 1) * $gapX)
        $x0 = [int]((1920 - $totalW) / 2)
        $y = 244 + ($row * ($cellH + $gapY))

        for ($col = 0; $col -lt $count; $col++) {
            $item = $items[$index]
            $x = $x0 + ($col * ($cellW + $gapX))
            $shadowRect = New-RectF ($x + 8) ($y + 12) $cellW $cellH
            $panelRect = New-RectF $x $y $cellW $cellH
            $g.FillRectangle($shadowBrush, $shadowRect)
            Draw-RoundedPanel $g $panelRect 16 $panelFill $panelStroke

            $imagePath = Join-Path $AssetDir "$($item.Id)_skin_preview.png"
            $image = [System.Drawing.Image]::FromFile($imagePath)
            $imageRect = New-RectF ($x + 36) ($y + 24) ($cellW - 72) 162
            Draw-FitImage $g $image $imageRect
            $image.Dispose()

            $nameRect = New-RectF ($x + 12) ($y + $cellH - 43) ($cellW - 24) 34
            $g.DrawString($item.Label, $nameFont, $nameBrush, $nameRect, $centerFormat)
            $index++
        }
    }

    $centerFormat.Dispose()
    $nameFont.Dispose()
    $nameBrush.Dispose()
    $shadowBrush.Dispose()
    $g.Dispose()
    Save-Jpeg $canvas.Bitmap $outputPath 92
    $canvas.Bitmap.Dispose()
}

New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

$portraitPath = Join-Path $OutputDir "battle-valkyries-summon-portraits.jpg"
$skinPath = Join-Path $OutputDir "battle-valkyries-skin-collection.jpg"

Draw-CardCollage $portraitPath
Draw-SkinCollage $skinPath

Get-Item $portraitPath, $skinPath | Select-Object FullName, Length, LastWriteTime
