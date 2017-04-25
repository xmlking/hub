import { SpecReporter } from 'jasmine-spec-reporter';
import { DisplayProcessor } from 'jasmine-spec-reporter';
import {Configuration} from 'jasmine-spec-reporter/built/configuration';
const Jasmine = require('jasmine');
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        return `TypeScript ${log}`;
    }
}

const jrunner = new Jasmine();
jrunner.loadConfig({
    spec_dir: 'src',
    spec_files: [
        '**/*.spec.ts'
    ],
    'stopSpecOnExpectationFailure': false,
    'random': false
});

jrunner.env.clearReporters();
jrunner.addReporter(new SpecReporter(<Configuration>{
    customProcessors: [CustomProcessor],
    spec: {
        displayStacktrace: true
    }
}));
jrunner.loadConfigFile();
jrunner.execute();
