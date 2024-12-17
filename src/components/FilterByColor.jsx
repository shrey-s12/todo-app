import React from 'react';

const FilterByColor = ({ colors }) => {
    return (
        <div className="p-4 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Filter by Color</h3>
            <div className="flex flex-col gap-2">
                {colors.map((color, index) => (
                    <label key={index} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span
                            className={`capitalize text-sm font-medium px-2 py-1 rounded-md bg-${color}-100 text-black`}
                        >
                            {color}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterByColor;
