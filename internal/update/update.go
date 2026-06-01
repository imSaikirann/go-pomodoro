package update

import (
	"fmt"
	"os"

	"github.com/blang/semver"
	"github.com/rhysd/go-github-selfupdate/selfupdate"
)

const repo = "imSaikirann/go-pomodoro"


var Version = "dev"

func RunUpdate() error {
	if Version == "dev" {
		return fmt.Errorf("cannot update development build")
	}

	v, err := semver.ParseTolerant(Version)
	if err != nil {
		return fmt.Errorf("invalid version: %w", err)
	}

	latest, err := selfupdate.UpdateSelf(v, repo)
	if err != nil {
		return fmt.Errorf("update failed: %w", err)
	}

	if latest.Version.Equals(v) {
		fmt.Printf("Already using the latest version: %s\n", latest.Version)
		return nil
	}

	fmt.Printf("Updated successfully to version: %s\n", latest.Version)
	os.Exit(0)
	return nil
}