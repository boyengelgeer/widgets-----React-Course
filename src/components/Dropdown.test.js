import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Dropdown from "./Dropdown";

configure({ adapter: new Adapter() });

describe("Dropdown", () => {
  it("should mount", () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find(".ui.form").exists()).toEqual(true);
  });

  it("should list items when options are given", () => {
    const options = [
      {
        label: "The Color Red",
        value: "red",
      },
    ];
    const wrapper = shallow(<Dropdown options={options} />);
    expect(wrapper.find(".item").exists()).toBe(true);
    expect(wrapper.find(".item").first().text()).toBe("The Color Red");
  });

  it("Should show select an option when no option selected ", () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find(".text").text()).toBe("select an option");
  });

  it("Should show selected option when selected is given ", () => {
    const options = [
      {
        label: "The Color Red",
        value: "red",
      },
    ];

    const selected = options[0];
    const wrapper = mount(<Dropdown options={options} selected={selected} />);
    expect(wrapper.find(".text").text()).toBe("The Color Red");
    expect(wrapper.prop("options")).toContain(selected);
  });
});
