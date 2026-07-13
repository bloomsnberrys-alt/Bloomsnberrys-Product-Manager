function onOpen(){

SpreadsheetApp.getUi()

.createMenu("📦 Product Manager")

.addItem("Install","installSystem")

.addSeparator()

.addItem("Load Master Data","loadMasterData")

.addItem("Refresh Dashboard","refreshDashboard")

.addSeparator()

.addItem("Duplicate Report","duplicateReport")

.addItem("Export CSV","exportCSV")

.addToUi();

}
