import * as navActions from "../../actions/navActions";
import { navState } from "../initialState";
import navReducer from "../navReducer";

const { describe, it } = global;

describe("settings reducer unitest", () => {
  it("should 測試開關 sidebar", () => {
    const nav = navReducer(navState, { type: "INITIAL" });

    const openSidebarAction = navActions.switchSideBarAction(true);
    const closeSidebarAction = navActions.switchSideBarAction(false);
    expect(nav.get('isSideBarOpened')).toBe(false);

    const afterOpenSidebar = navReducer(nav, openSidebarAction);
    expect(afterOpenSidebar.get('isSideBarOpened')).toBe(true);

    const afterCloseSidebar = navReducer(afterOpenSidebar, closeSidebarAction);

    expect(afterCloseSidebar.get('isSideBarOpened')).toBe(false);
  });
});