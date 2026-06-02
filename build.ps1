$ErrorActionPreference = "Stop"

$releaseDir = "release"
$version = "v0.2.2"
$ldflags = "-X github.com/imSaikirann/go-pomodoro/cmd/pomodoro.Version=$version -X github.com/imSaikirann/go-pomodoro/internal/update.Version=$version"

function Assert-LastCommandSucceeded {
    param([string]$Step)

    if ($LASTEXITCODE -ne 0) {
        throw "$Step failed with exit code $LASTEXITCODE"
    }
}

Remove-Item $releaseDir -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path $releaseDir | Out-Null
New-Item -ItemType Directory -Force -Path "$releaseDir/go-cache" | Out-Null
New-Item -ItemType Directory -Force -Path "$releaseDir/go-build" | Out-Null

$env:GOCACHE = (Resolve-Path "$releaseDir/go-cache").Path
$env:GOTMPDIR = (Resolve-Path "$releaseDir/go-build").Path

Write-Host "Building Windows..."
$env:GOOS = "windows"
$env:GOARCH = "amd64"
go build -buildvcs=false -ldflags="$ldflags" -o "$releaseDir/pomodoro.exe" .
Assert-LastCommandSucceeded "Windows build"

Remove-Item Env:GOOS -ErrorAction SilentlyContinue
Remove-Item Env:GOARCH -ErrorAction SilentlyContinue
Remove-Item Env:GOCACHE -ErrorAction SilentlyContinue
Remove-Item Env:GOTMPDIR -ErrorAction SilentlyContinue

Write-Host "Testing Windows binary..."
$exePath = (Resolve-Path "$releaseDir/pomodoro.exe").Path
& $exePath version
Assert-LastCommandSucceeded "Windows binary test"

Write-Host "Packaging Windows zip..."
Compress-Archive "$releaseDir/pomodoro.exe" "$releaseDir/pomodoro-windows-amd64.zip" -Force

Write-Host "Windows artifact ready in /release"
