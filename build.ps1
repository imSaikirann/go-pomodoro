Write-Host "Building Windows..."
$env:GOOS="windows"; $env:GOARCH="amd64"
go build -o release/go-pomodoro-windows.exe ./cmd/pomodoro

Write-Host "Building Linux..."
$env:GOOS="linux"; $env:GOARCH="amd64"
go build -o release/go-pomodoro-linux ./cmd/pomodoro

Write-Host "Building macOS..."
$env:GOOS="darwin"; $env:GOARCH="amd64"
go build -o release/go-pomodoro-mac ./cmd/pomodoro

Remove-Item Env:GOOS
Remove-Item Env:GOARCH

Write-Host "Build complete."
