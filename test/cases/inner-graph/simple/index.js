import { exportUsed, export2Used, export3Used } from "./inner";
import { f1, pureUsed } from "./module";

it("export should be unused when only unused functions use it", () => {
	f1();
	expect(pureUsed).toBe(42);
	if (process.env.NODE_ENV === "production") {
		expect(exportUsed).toBe(false);
		expect(export2Used).toBe(true);
		expect(export3Used).toBe(true);
	}
	return import("./chunk");
});
