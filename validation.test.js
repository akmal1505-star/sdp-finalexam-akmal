import { describe, it, expect } from "vitest";

function semakEmail(email) {
  return email.includes("@");
}

describe("Ujian Pengesahan Email", () => {
  it("Email sah", () => {
    expect(semakEmail("test@gmail.com")).toBe(true);
  });

  it("Email tidak sah", () => {
    expect(semakEmail("testgmail.com")).toBe(false);
  });
});
