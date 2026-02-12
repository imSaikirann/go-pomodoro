# go-pomodoro

**A lightweight, distraction-free Pomodoro timer built for developers who live in the terminal.**

![Go Version](https://img.shields.io/github/go-mod/go-version/imSaikirann/go-pomodoro)
![Downloads](https://img.shields.io/github/downloads/imSaikirann/go-pomodoro/total)

---

## Demo

```bash
$ pomodoro start
⏱  25:00 Focus session started...
---

## Features

- Terminal-based Pomodoro timer
- Default 25-minute focus session
- Custom duration support
- Minimal and distraction-free

---

## Installation (Developer)

Make sure **Go** is installed: https://go.dev/dl

Install the CLI using Go:

```bash
go install github.com/imSaikirann/go-pomodoro/cmd/pomodoro@latest

---


## Usage

After installation, you can use the Pomodoro CLI from anywhere in your terminal.

### Start a Pomodoro session (default 25 minutes)

```bash
pomodoro start


### Start a Pomodoro session with a custom duration

```bash
pomodoro start 15