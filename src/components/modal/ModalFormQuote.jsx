import { useForm } from "react-hook-form";

const ModalFormQuote = () => {
  const {
    register,
    handleSubmit,
    wathc,
    formState: { errors }
  } = useForm();

  const onsubmit = (data) => console.log(data);
  return (
    <div className="modal form dark-bg">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="row">
                <div className="col-lg-6 col-ml-6 col-12">
                  <label>Number of Bedrooms*</label>
                  <select {...register("bedrooms")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFormQuote;
