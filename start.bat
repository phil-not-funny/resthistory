@echo off

echo Installing Dependencies...
CALL npm i

echo Starting Server...
CALL node . nogenerate

pause >nul