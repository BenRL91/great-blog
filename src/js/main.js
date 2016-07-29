// Import Libraries/Tools //
import angular from "angular";
import "angular-ui-router";


// Import Controllers //
import { LayoutController } from "./controllers/layout.controller";
import { DashboardController } from "./controllers/dashboard.controller";
import { ArchiveController } from "./controllers/archive.controller";
import { PopularController } from "./controllers/popular.controller";
// Import Services //

// Import Utilities //
import { config } from "./utilities/config";
import { blogs } from "./utilities/constants/blogs.constant";

// Register Modules //
angular.module("app", ["ui.router"])
              .config(config)
              .controller("LayoutCtrl", LayoutController)
              .controller("DashboardCtrl", DashboardController)
              .controller("ArchiveCtrl", ArchiveController)
              .controller("PopularCtrl", PopularController)
              .constant("blogs", blogs )
