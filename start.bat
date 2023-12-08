@echo off

echo Installing Dependencies...
CALL npm i

Starting Server...
CALL node . nogenerate

pause >nul