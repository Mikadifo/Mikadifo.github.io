import React, { useState } from 'react';
import ArrowButton from './arrowButton';

const CarouselControls = ({ elements, renderElement }) => {
    const DEFAULT_CONTROL_STYLE =
        'border-[1px] border-solid border-l-white border-r-white dark:border-l-blue-dark dark:border-r-blue-dark';
    const [currentElement, setCurrentElement] = useState(0);

    const setPrevious = () => {
        if (currentElement > 0) return setCurrentElement(currentElement - 1);
        setCurrentElement(elements.totalCount - 1);
    };

    const setNext = () => {
        if (currentElement < elements.totalCount - 1)
            return setCurrentElement(currentElement + 1);
        setCurrentElement(0);
    };

    return (
        <div className="grid grid-cols-6 place-items-center">
            <ArrowButton action={setPrevious} />
            <div className="col-span-4">
                {renderElement(currentElement)}
                <div className="mt-2 flex place-content-center">
                    {elements.edges.map(({ node }, i) => (
                        <button
                            type="button"
                            key={node.id}
                            onClick={() => setCurrentElement(i)}
                            aria-label={`Go to project ${i}`}
                            className={`${
                                i <= 0
                                    ? 'rounded-bl-lg'
                                    : i >= elements.totalCount - 1
                                      ? 'rounded-tr-lg'
                                      : DEFAULT_CONTROL_STYLE
                            } bg-blue-dark dark:bg-white w-9 h-6 ${
                                i === currentElement
                                    ? 'opacity-50'
                                    : 'opacity-25'
                            }`}
                        />
                    ))}
                </div>
            </div>
            <ArrowButton action={setNext} right={true} />
        </div>
    );
};

export default CarouselControls;
