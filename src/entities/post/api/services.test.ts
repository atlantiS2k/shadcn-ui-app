import { postServices } from "./services";
import { api } from "../../../shared/lib/api";

const postMockData = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

jest.mock("../../../shared/lib/api", () => ({
  api: {
    json: jest.fn(),
  },
}));

describe("postServices", () => {
  test("getPost success", async () => {
    const apiMock = api.json as jest.Mock;
    apiMock.mockResolvedValue({
      ok: true,
      status: 200,
      result: postMockData,
      response: null,
    });

    const result = await postServices.getPost({ articlesId: postMockData.id });

    expect(result.post).toEqual(postMockData);
    expect(result.error).toBeNull();
  });

  test("getPost error", async () => {
    const apiMock = api.json as jest.Mock;
    apiMock.mockResolvedValue({
      ok: false,
      error: new Error("Failed to fetch post"),
    });

    const result = await postServices.getPost({ articlesId: postMockData.id });

    expect(result.post).toBeNull();
    expect(result.error?.message).toBe("Failed to fetch post");
  });

  test("getPost with undefined error", async () => {
    const apiMock = api.json as jest.Mock;
    apiMock.mockResolvedValue({
      ok: false,
      error: undefined,
    });

    const result = await postServices.getPost({ articlesId: postMockData.id });

    expect(result.post).toBeNull();
    expect(result.error).toBeNull();
  });
});
