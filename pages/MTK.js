import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { usePagination } from 'react-table';
import { format } from 'date-fns';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const query = `
  query ExampleQuery {
    launches {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_date_local
    }
  }
`;

const MTK = () =>{

  const [launches, setLaunches] = useState([]);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [dateSearch, setDateSearch] = useState(null);


  function handleSort(key) {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      key = null;
      direction = null;
    }
    setSortConfig({ key, direction });
  }

  async function getdata(){
    const response = await fetch('https://spacex-production.up.railway.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    try {
      let data = await response.json();
      data.data.launches.forEach(function(launch) {
        launch.launch_date_local=launch.launch_date_local.substring(0,10).replace(/-/g,'/')
      })
      setLaunches(data.data.launches);
    } catch {
      console.error('data error');
    }
  }

  useEffect(() => {
    getdata()
  }, []);



  function handleSearch(text) {
    console.log(text)
    console.log(filteredLaunches[0])
    setSearchText(text);
    if (text === '') {
      setFilteredLaunches([]);
    } else {
      const filtered = launches.filter((launch) =>
        launch.mission_name.toLowerCase().includes(text.toLowerCase()) ||
        launch.rocket.rocket_name.toLowerCase().includes(text.toLowerCase()) ||
        launch.rocket.rocket_type.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLaunches(filtered);
    }
    setPage(0);
  }

  function handleDateSearch(text) {
      setDateSearch(text)
      const formattedDate = format(new Date(text), 'yyyy/MM/dd');
      const filtered = launches.filter((launch) =>
        launch.launch_date_local==formattedDate
      );
      setFilteredLaunches(filtered);
      setPage(0);
  }
  
  const dataToDisplay = searchText.length > 0 || dateSearch ? filteredLaunches : launches;

  const itemsPerPage = 20;
  const fromIndex =  Math.min(page * itemsPerPage + 1, dataToDisplay.length);
  const toIndex = Math.min((page + 1) * itemsPerPage, dataToDisplay.length);
  const pageCount = Math.ceil(dataToDisplay.length / itemsPerPage);

  const sortedLaunches = [...dataToDisplay].sort((a, b) => {
    if (!sortConfig.key) {
      return 0;
    }
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return (
    <View style={styles.bg}>
    <ImageBackground source={require('../source/mtk.png')} resizeMode = "repeat">
    <View style={styles.container}> 
      <DataTable style={styles.dataTable}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Mission Name, Rocket Name, and Rocket Type"
        value={searchText}
        onChangeText={handleSearch}
      />
      <div style={styles.searchBar}>
    <DatePicker
        selected={dateSearch}
        onSelect={date => handleDateSearch(date)}
        onChange={date => handleDateSearch(date)}
        placeholderText="Search Date"
        mode="date"
        dateFormat="yyyy/MM/dd"
      />
      </div>
        <DataTable.Header style={styles.header}>
          <DataTable.Title
            sortDirection={sortConfig.key === 'mission_name' ? sortConfig.direction : null}
            onPress={() => handleSort('mission_name')}
          >
            <Text style={styles.titleText}>Mission Name</Text>
          </DataTable.Title>
          <DataTable.Title
            sortDirection={sortConfig.key === 'rocket_name' ? sortConfig.direction : null}
            onPress={() => handleSort('rocket_name')}
          >
            <Text style={styles.titleText}>Rocket Name</Text>
          </DataTable.Title>
          <DataTable.Title
            sortDirection={sortConfig.key === 'rocket_type' ? sortConfig.direction : null}
            onPress={() => handleSort('rocket_type')}
          >
            <Text style={styles.titleText}>Rocket Type</Text>
          </DataTable.Title>
          <DataTable.Title
            sortDirection={sortConfig.key === 'launch_date_local' ? sortConfig.direction : null}
            onPress={() => handleSort('launch_date_local')}
          >
            <Text style={styles.titleText}>Launch Date</Text>
          </DataTable.Title>
          <Button
            title="X"
            onClick={() => {
              setSortConfig({ key: null, direction: null });
              setDateSearch(null);
              setSearchText('');
            }}
            style={styles.resetButton}
          >X</Button>
        </DataTable.Header>
        {sortedLaunches.slice(fromIndex-1, toIndex).map((launch) => (
          <DataTable.Row key={launch.mission_name} style={styles.row}>
            <DataTable.Cell>{launch.mission_name}</DataTable.Cell>
            <DataTable.Cell>{launch.rocket.rocket_name}</DataTable.Cell>
            <DataTable.Cell>{launch.rocket.rocket_type}</DataTable.Cell>
            <DataTable.Cell>{launch.launch_date_local}</DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Pagination
          page={page}
          numberOfPages={pageCount}
          onPageChange={(newPage) => setPage(newPage)}
          label={`${fromIndex}-${toIndex} of ${searchText.length > 0 || dateSearch ? filteredLaunches.length : launches.length}`}
        />
    <View style={styles.paginationButtonContainer}>
    <Button
      title="Last"
      disabled={page === pageCount-1 || (filteredLaunches.length==0 && searchText.length > 0) }
      onClick={() => setPage(pageCount-1)}
      style={styles.paginationButton}
    >&gt;&gt;</Button>
    <Button
      title="First"
      disabled={page === 0}
      onClick={() => setPage(0)}
      style={styles.paginationButton}
    >&lt;&lt;</Button>
  </View>
      </DataTable>
      <StatusBar style="auto" />
      </View>
    </ImageBackground>
    </View>
  );
  }


  const styles = StyleSheet.create({
    bg: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar: {
      width: '30%',
      height: 40,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderColor: '#D3D3D3',
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: '#FFF',
    },
    dataTable: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '70%',
      borderRadius: 20,
      backgroundColor: '#F5F5F5',
      overflow: 'hidden',
    },
    header: {
      width: '70%',
      backgroundColor: '#FFB6C1',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    row: {
      width: '70%',
    },
    titleText: {
      fontWeight: 'bold',
      fontFamily: 'Arial',
      fontSize: 18,
      color: '#FFF',
    },
    resetButton: {
      position: 'absolute',
      right: 10,
      top: 8,
      backgroundColor: '#FFB6C1',
      borderRadius: 20,
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    paginationButton: {
      borderRadius: 20,
      width: 30,
      height: 30,
      marginHorizontal: 5,
      marginRight: 16,
      backgroundColor: '#FFB6C1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paginationButtonContainer: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      marginTop: 20,
    },
  });

export default MTK