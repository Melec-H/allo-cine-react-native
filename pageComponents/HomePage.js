import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native';
import FilmList from './../components/FilmList'
import {getMostPopularFilms} from "../API/TMDB";

const HomePage = (props) => {
	const {navigation} = props;

	const [films, setFilms] = useState(0);

	useEffect(()  => {
        getMostPopularFilms().then(newFilms =>{ setFilms(newFilms)})
	});

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Home Screen HELLO</Text>
			<FilmList films={films}/>
		</View>

	)
};
export default HomePage