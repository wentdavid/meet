import React from "react";
import { shallow } from "enzyme";

import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper, numInput;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => { }} />);
        numInput = NumberOfEventsWrapper.find("input.num-input");
    })

    test("<NumberOfEvents /> and num-input are both rendered", () => {
      expect(NumberOfEventsWrapper).toBeDefined();
      expect(numInput).toBeDefined();
    });

    test("default number of event value is 32", () => {
        if (numInput.length){
        expect(numInput.prop("type")).toBe("number");
        expect(NumberOfEventsWrapper.state("num")).toBe(32);
        }
    })

    test("user can change the number of events", () => {
        expect(NumberOfEventsWrapper.state("num")).toBe(32);
        if (numInput.length) {
        numInput.simulate("change", { target: { value: 24 } });
        expect(NumberOfEventsWrapper.state("num")).toBe(24);
        }
    })

    test("renders number of events equals the value of the user input", () => {
        if (numInput.length) {
        numInput.simulate("change", { target: { value: 24 } });
        expect(NumberOfEventsWrapper.state("num")).toBe(24);
        }
    })
})