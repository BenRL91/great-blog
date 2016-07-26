// Import Libraries/Tools //
import angular from "angular";
import "angular-ui-router";


// Import Controllers //

// Import Services //

// Import Constants //

// Import Config //
import { config } from "./config";

// Register Modules //
angular.module("app", ["ui.router"])
              .config(config);
