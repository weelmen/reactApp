import React, { useEffect, useRef, useState, useCallback } from "react";
import { SafeAreaView, ScrollView } from 'react-native';

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`../icons/test1.svg`)
        ).ReactComponent;
        
      } catch (err) {
        
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError
  });
  if (error) {
    return error.message;
  }
  if (loading) {
    return "Loading...";
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }
  return null;
};
/*
export default class SVG extends React.Component(props){
 
 
  const handleOnCompleted = useCallback(
    (props.name) => console.log(`${props.name} successfully loaded`),
    []
  );
  const handleIconError = useCallback((err) => console.error(err.message), []);
    return (
   
    <SafeAreaView>
        <Icon
          name={props.name}
          fill="gray"
          onCompleted={handleOnCompleted}
          onError={handleIconError}
        />
     </SafeAreaView>
   )
    }*/
export default class SVG extends React.Component {
  render() {
    return (
      <SafeAreaView >


        <Icon
          /*name={name}*/
          /*fill="gray"*/
          /*onCompleted={handleOnCompleted}*/
         /* onError={handleIconError}*/
        />


      </SafeAreaView>
    );
  }
}