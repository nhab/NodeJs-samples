@echo off
for /r %%i in (*.jpg) do (
 echo  %%~ti %%i
)
pause