import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component{
    static navigationOptions = {
        title: 'Contact Us'
    };

    render(){
        return(
            <ScrollView>
                <Card>
                    <Text style={{marginBottom:10}}>
                        1 Nucamp Way
                    </Text>
                    <Text style={{marginBottom:10}}>
                        Seattle, WA 98001
                    </Text>
                    <Text style={{marginBottom:10}}>
                        U.S.A.
                    </Text>
                    <Text style={{marginBottom:10}}>
                        Phone: 1-206-555-1234
                    </Text>
                    <Text style={{marginBottom:10}}>
                        Email: campsites@nucamp.co
                    </Text>
                </Card>
            </ScrollView>
        );
    }

}

export default Contact;