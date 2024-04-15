import connectDB from '@/Data/db';
import Property from '@/models/Property';

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const property = await Property.find({ _id: params.id });

    if (!property) {
      return new Response(
        JSON.stringify(
          { message: 'The property is not found yet' },
          { status: 404 }
        )
      );
    }

    return new Response(
      JSON.stringify({
        status: 'success',
        data: { property },
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
