import { StyleSheet, View, Image, ImageBackground, Text, Pressable } from 'react-native';
import { useState } from 'react';

import { css, resh, resw, resm, sp_mode } from '../../style';

import logo from '../../assets/Logo japanese.png';
import bg_fv from '../../assets/16.jpg';

const styles = StyleSheet.create({
    cont: {
        width: resw(320),
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        position: 'fixed',
        zIndex: 10,
        backgroundColor: 'white',
    },
    logo: {
        width: 50,
        height: 50,
    },
    btn_nav: {
        width: 20,
        fontSize: 30,
        lineHeight: '0.15',
        color: '#888',
        marginTop: -23,
    },
    nav: {
        position: 'absolute',
        zIndex: 20,
        top: 50,
        width: '100%',
        border: '5px solid #ddd',
        backgroundColor: 'white',
    },
    nav_item: {
        width: '100%',
        textAlign: 'center',    
        paddingTop: 10,
        paddingBottom: 10,
    },
    bg_fv: {
        paddingTop: 50,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt_fv: {
        fontSize: resm(25),
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default function LandingPage(){
    const [isShowNav, setShowNav] = useState(false);

    return (
        <View style={styles.cont}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Pressable onPress={()=>setShowNav(!isShowNav)}><Text style={styles.btn_nav}>___</Text></Pressable>
                {
                    isShowNav &&
                    <View style={styles.nav}>
                        <Pressable><Text style={styles.nav_item}>Search Sitters</Text></Pressable>
                        <Pressable><Text style={styles.nav_item}>Become a Sitter</Text></Pressable>
                        <Pressable><Text style={styles.nav_item}>Our Services</Text></Pressable>
                        <Pressable><Text style={styles.nav_item}>Sign Up</Text></Pressable>
                        <Pressable><Text style={styles.nav_item}>Sign In</Text></Pressable>
                        <Pressable><Text style={styles.nav_item}>Help</Text></Pressable>
                    </View>
                }
            </View>
            <ImageBackground source={bg_fv} style={styles.bg_fv}>
                <Text style={styles.txt_fv}>Loving pet care in your neighborhood. Book trusted sitters and dog walkers.</Text>
            { sp_mode && <Pressable><Text style={styles.btn_search_sp}>Search</Text></Pressable>
            }
            </ImageBackground>
        </View>
    );
}