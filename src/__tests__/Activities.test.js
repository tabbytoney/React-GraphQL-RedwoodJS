import { render, cleanup, waitFor, screen } from "@testing-library/react"

import Activities from '..views/Activities'

beforeAll(() => jestPreset.spyOn(window, "fetch"))

afterEach(cleanup)

describe("Activities", () => {
    test("fetches data from the API and displays it", async () => {
            const data = [{ name: "reptar", date: "11/11/2020", description: 'Lorem Ipsum'}]
            window.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => (data)
            })
    })
})