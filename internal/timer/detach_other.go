//go:build !windows

package timer

import "syscall"

func detachedProcAttr() *syscall.SysProcAttr {
	return nil
}
