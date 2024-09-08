import React, { useState } from 'react';
import { ApodContainer, ApodContent, ApodImageContainer, ApodImage, ApodTitle, ApodDescription, ErrorContainer, ErrorMessage, DateSelectionContainer, DateInput, FetchButton } from '../styles/ApodContainer.Styled';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchApod = async (date) => {
    const { data } = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
            date: date,
            api_key: 'KS3agnq2DqtH52gzXk3MRdSIn4vbepnVgHs0AvLg',
        }
    });
    return data;
};

function Apod() {
    const [date, setDate] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const queryClient = useQueryClient();

    const { data, isLoading, error } = useQuery({
        queryKey: ['apod', selectedDate],
        queryFn: () => fetchApod(selectedDate),
        enabled: !!selectedDate,
    });

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleFetchImage = () => {
        setSelectedDate(date);
        queryClient.invalidateQueries(['apod', date]);
    };

    return (
        <ApodContainer>
            <DateSelectionContainer>
                <DateInput
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                />
                <FetchButton onClick={handleFetchImage}>Fetch Image</FetchButton>
            </DateSelectionContainer>
            {isLoading && <p>Loading...</p>}
            {error && (
                <ErrorContainer>
                    <ErrorMessage>Error fetching data. Please check the date format.</ErrorMessage>
                </ErrorContainer>
            )}
            {data && !isLoading && (
                <ApodContent>
                    <ApodImageContainer>
                        <ApodImage src={data.url} alt={data.title} />
                    </ApodImageContainer>
                    <div>
                        <ApodTitle>{data.title}</ApodTitle>
                        <ApodDescription>{data.explanation}</ApodDescription>
                    </div>
                </ApodContent>
            )}
        </ApodContainer>
    );
}

export default Apod;
