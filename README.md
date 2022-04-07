1. To open allure report:

   > allure open allure-report

2. Run a specific test suite:

   > npm test ./test-configs/grouping-testscripts-parallel.js -- --suite <Testsuite_Name>

3. Selenium Grid flow:
   {capabilities} -----> HUB ---Select a node to route my test to ----> Node: Appium Server

4. Run selenium server hub:

   > java -cp "selenium-server-standalone-3.141.59.jar;selenium-grid-custom-matcher-3.141.59.jar" org.openqa.grid.selenium.GridLauncherV3 -role hub -hubConfig hubConfig.json

5. Start appium on nodes
   > appium -p <port_number> <part_to_node_config_file>
