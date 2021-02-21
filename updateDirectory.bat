set "source=./"

set "destination=./Portfolio/"

robocopy "%source%" "%destination%" /XD ".git" Portfolio /s /XA:H /purge /XF ".gitignore .brackets.json:" ".notjekyll" "debug.log" "updateDirectory.bat"