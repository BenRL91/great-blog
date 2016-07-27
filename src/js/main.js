// Import Libraries/Tools //
import angular from "angular";
import "angular-ui-router";


// Import Controllers //
import { DashboardController } from "./controllers/dashboard.controller";
import { ArchiveController } from "./controllers/archive.controller";
// Import Services //

// Import Constants //

// Import Config //
import { config } from "./config";

// Register Modules //
angular.module("app", ["ui.router"])
              .config(config)
              .controller("DashboardCtrl", DashboardController)
              .controller("ArchiveCtrl", ArchiveController)
