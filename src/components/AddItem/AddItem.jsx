export default function AddItem() {

  return (
    <section className="add-item-form">
      <form>
        <label>Item:
          <input type="text" />
        </label>
        <label>
          Quantity:
          <input type="number" />
        </label>
        <label>
          Unit:
          <input type="text" />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </section>
  )
}