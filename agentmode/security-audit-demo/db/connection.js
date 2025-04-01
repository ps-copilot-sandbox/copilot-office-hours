export const db = {
  query: (sql) => {
    console.log("[DB QUERY]:", sql);
    // Simulate a fake user result
    if (sql.includes("admin") && sql.includes("1234")) {
      return [{ id: 1, username: "admin" }];
    }
    return [];
  }
};
