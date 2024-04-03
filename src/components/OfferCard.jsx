function OfferCard({ CardTitle, CardDescription }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title font-bold">{CardTitle}</h5>
          <p className="card-text">{CardDescription}</p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARRJREFUSEvtltsVwiAMhpNNdBPdxE6iTqKb2E3sJrHxACdH7oTKg/LWU8iXy08IwqCFg7iQBRPRDgBOSgcXRLxLGyXgJwAwXLsYvrdGkmAi4khvWqI4f0XEC3/nwLzp/AevYltMFmprr071DACTUXtNKfRgRDxy1OK6lTjgg4nICQlX6RmjMXHNFmyFZxzgG3BIiLE/WDjAV5CjD9V/O7BI/yMA3w6caTr9wV+v8RBVy5tQ2FbVqebOVdu12Dc1uDBAb9vvgSc7ibj3ONIyuY6hRtCS6vAEEgKLLsT9t0VMzkE7eXijTwzcElrJmWSqSwy07gmCW429hzjzpOZsSHAXIVWDewnpU0SxyLMDfS5lrf+HgV/VTNwfKeoUogAAAABJRU5ErkJggg==" />
        </div>
      </div>
    </>
  );
}

export default OfferCard;
