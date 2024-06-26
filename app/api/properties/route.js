import connectDB from '@/Data/db';
import Property from '@/models/Property';

export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({});
    return new Response(
      JSON.stringify({
        status: 'success',
        data: { properties },
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error fetching properties:', error);
    return new Response(
      JSON.stringify({ status: 'error', message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
