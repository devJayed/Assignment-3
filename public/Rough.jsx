{/* Product Quantity */}
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Product Quantity*</span>
              </div>
              <input
                type="number"
                {...register("ProductQuantity", {
                  required: "Quantity is required",
                })}
                className="textarea textarea-bordered"
                placeholder="Product Quantity"
              />
              {errors.ProductQuantity && (
                <span className="text-red-500">
                  {errors.ProductQuantity.message}
                </span>
              )}
            </div>
			
			
{/* Product Quantity */}
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Product Quantity*</span>
              </div>
              <input
                type="number"
                {...register("ProductQuantity", {
                  required: "Quantity is required",
                })}
                className="textarea textarea-bordered"
                placeholder="Product Quantity"
              />
              {errors.ProductQuantity && (
                <span className="text-red-500">
                  {errors.ProductQuantity.message}
                </span>
              )}
            </div>
			
			
			
			
			
			
			
			
			
			
			
			
			{/* Product Cost */}
          <div className="form-control mb-4 w-1/2">
            <div className="label">
              <span className="label-text">Product Cost*</span>
            </div>
            <input
              type="number"
              {...register("ProductCost", { required: "Cost is required" })}
              className="textarea textarea-bordered"
              placeholder="Product Cost"
            />
            {errors.ProductCost && (
              <span className="text-red-500">{errors.ProductCost.message}</span>
            )}
          </div>