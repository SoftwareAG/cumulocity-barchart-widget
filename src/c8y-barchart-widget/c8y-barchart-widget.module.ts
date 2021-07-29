/**
 * /*
 * Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @format
 */

import { CoreModule, HOOK_COMPONENTS } from "@c8y/ngx-components";
import { C8yBarchartWidgetConfig } from "./c8y-barchart-widget.config.component";
import { C8yBarchartWidget } from "./c8y-barchart-widget.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";

@NgModule({
    imports: [CoreModule, HttpClientModule, ChartsModule],
    declarations: [C8yBarchartWidget, C8yBarchartWidgetConfig],
    entryComponents: [C8yBarchartWidget, C8yBarchartWidgetConfig],
    providers: [
        {
            provide: HOOK_COMPONENTS,
            multi: true,
            useValue: {
                id: "global.presales.c8y.barchart.widget.widget",
                label: "Bar chart",
                description: "Bar chart widget",
                component: C8yBarchartWidget,
                configComponent: C8yBarchartWidgetConfig,
                previewImage: require("@widget-assets/img-preview.png"),
                data: {
                    ng1: {
                        options: { noDeviceTarget: true, noNewWidgets: false, deviceTargetNotRequired: false, groupsSelectable: true },
                    },
                },
            },
        },
    ],
})
export class C8yBarchartWidgetModule {}
