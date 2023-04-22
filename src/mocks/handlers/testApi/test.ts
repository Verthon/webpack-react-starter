import { rest } from "msw";

export const getTest = rest.get("/api/some-endpoint", (req, res, ctx) => {
	return res(ctx.json({ message: "Hello from MSW!" }));
});

export const submitTest = rest.post("/api/some-endpoint", (req, res, ctx) => {
	return res(ctx.json({}));
});
