function propsEventsUtils(data) {
  const { title, place } = data;
  if (!title || !place) {
    const error = new Error("title & place are required");
    error.statusCode = 404;
    throw error;
  }
}

export default propsEventsUtils;
