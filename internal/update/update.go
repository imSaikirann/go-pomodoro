package update

import (
	"fmt"
	"os"

	"github.com/blang/semver"
	"github.com/rhysd/go-github-selfupdate/selfupdate"
)

const repo = "imSaikirann/go-pomodoro"

var Version = "dev" 

func RunUpdate() {

	if Version == "dev" {
		fmt.Println("Cannot update development build")
		return
	}

	v, err := semver.ParseTolerant(Version)
	if err != nil {
		fmt.Println("Invalid version:", err)
		return
	}

	latest, err := selfupdate.UpdateSelf(v, repo)
	if err != nil {
		fmt.Println("Update failed:", err)
		return
	}

	if latest.Version.Equals(v) {
		fmt.Println("Already using the latest version:", latest.Version)
		return
	}

	fmt.Println("Updated successfully to version:", latest.Version)
	os.Exit(0)
}
