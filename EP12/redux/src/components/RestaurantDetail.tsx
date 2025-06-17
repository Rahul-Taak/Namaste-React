export default function RestaurantDetail({}) {
  return (
    <div className="flex gap-10 flex-col">
      <h1>Restaurant Detail</h1>
      <section>
        <h2>Restaurant Name</h2>
        <ul>
          <li className="border p-2 text-white">
            <h3>Restaurant Name</h3>
            <p>ID: 12345</p>
            <p>Rating: 4.5</p>
            <p>Cuisines: Indian, Chinese</p>
            <p>Open: Yes</p>
            <p>Cost for Two: ₹500</p>
            <p>Delivery Time: 30 mins</p>
            <img
              src="https://example.com/image.jpg"
              alt="Restaurant"
              width={100}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
