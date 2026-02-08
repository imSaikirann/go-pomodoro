package timer

func getBreakMinutes(focus int) int {
	switch {
	case focus < 10:
		return 0
	case focus <= 30:
		return 5
	case focus <= 45:
		return 8
	case focus <= 60:
		return 10
	case focus <= 90:
		return 15
	default:
		return 20
	}
}



func getCycles(focus int) int {
	switch {
	case focus < 10:
		return 1
	case focus <= 30:
		return 2
	case focus <= 45:
		return 3
	case focus <= 60:
		return 4
	default:
		return 6
	}
}