function propsEventsUtils(data) {
  const { name, place } = data;
  if (!name || !place) {
    const error = new Error("name & place are required");
    error.statusCode = 404;
    throw error;
  }
}

export default propsEventsUtils;
