const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchProperties() {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error('error while fetch data (properties)');
    }

    const properties = await res.json();

    return properties;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchSingleProperty(id) {
  try {
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error('error while fetch data (properties)');
    }

    const properties = await res.json();

    return properties;
  } catch (error) {
    console.log(error);
    return null;
  }
}
