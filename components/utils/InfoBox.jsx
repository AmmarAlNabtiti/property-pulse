import Link from 'next/link';

function InfoBox({ href, bgColor, btnColor, title, description, btnText }) {
  return (
    <div className={`p-6 ${bgColor} rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link
        href={href}
        className={`inline-block px-4 py-2 text-white ${btnColor} rounded-lg hover:bg-gray-700`}
      >
        {btnText}
      </Link>
    </div>
  );
}

export default InfoBox;
