import React from "react";

type formField = {
    name: string;
    placeholder: string;
};

export default function displayFormElement(name: string, field: formField) {
    switch (name) {
        case "input": {
            return (
                <input
                    className="w-42 border border-bottom border-gray-300"
                    name={field.name}
                    placeholder={field.placeholder}
                />
            );
        }
    }
}
