$releaseDir = "release"
$version = "v0.1.0"   

New-Item -ItemType Directory -Force -Path $releaseDir | Out-Null

Write-Host "Building Windows..."
$env:GOOS="windows"; $env:GOARCH="amd64"
go build -ldflags="-X main.Version=$version" -o "$releaseDir/pomodoro.exe" ./cmd/pomodoro

Write-Host "Building Linux..."
$env:GOOS="linux"; $env:GOARCH="amd64"
go build -ldflags="-X main.Version=$version" -o "$releaseDir/pomodoro-linux-amd64" ./cmd/pomodoro

Write-Host "Building macOS..."
$env:GOOS="darwin"; $env:GOARCH="amd64"
go build -ldflags="-X main.Version=$version" -o "$releaseDir/pomodoro-darwin-amd64" ./cmd/pomodoro

Remove-Item Env:GOOS
Remove-Item Env:GOARCH

Write-Host "Packaging Windows zip..."
Compress-Archive "$releaseDir/pomodoro.exe" "$releaseDir/pomodoro-windows-amd64.zip" -Force

Write-Host "Packaging Linux tar.gz..."
tar -czf "$releaseDir/pomodoro-linux-amd64.tar.gz" -C $releaseDir pomodoro-linux-amd64

Write-Host "Packaging macOS tar.gz..."
tar -czf "$releaseDir/pomodoro-darwin-amd64.tar.gz" -C $releaseDir pomodoro-darwin-amd64

Write-Host "Release artifacts ready in /release"
