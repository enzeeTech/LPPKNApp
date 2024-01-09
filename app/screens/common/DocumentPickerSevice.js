// DocumentPickerService.js
import * as DocumentPicker from "expo-document-picker";
import { Alert } from "react-native";

export const pickDocument = async (currentDocuments, setDocuments, updateFormData) => {
    try {
        // Check if the user has already uploaded 3 documents
        if (currentDocuments.length >= 3) {
          Alert.alert("Error", "You cannot upload more than 3 documents.");
          return;
        }
    
        // Invoke the Document Picker
        const result = await DocumentPicker.getDocumentAsync({
          type: "*/*",
          copyToCacheDirectory: true,
          multiple: true
        });
    
        // Check if the picker was not canceled
        if (!result.cancelled) {
          let newDocuments = [...currentDocuments];
    
          // Check if result contains multiple files
          if (result.assets) {
            for (const asset of result.assets) {
              // Check if adding this file exceeds the 3 document limit
              if (newDocuments.length >= 3) {
                Alert.alert("Error", "You cannot upload more than 3 documents.");
                break;
              }
    
              // Check if individual file size is within 4MB
              if (asset.size <= 4 * 1024 * 1024) {
                newDocuments.push({
                  name: asset.name,
                  size: asset.size,
                  uri: asset.uri,
                  mimeType: asset.mimeType,
                });
              } else {
                // If the individual file size exceeds 4MB, show an error for that file
                Alert.alert("Error", `The file ${asset.name} exceeds the 4MB size limit.`);
              }
            }
          } else if (result.uri) {
            // Handling single file selection
            const asset = {
              name: result.name,
              size: result.size,
              uri: result.uri,
              mimeType: result.mimeType,
            };
    
            // Check if individual file size is within 4MB
            if (asset.size <= 4 * 1024 * 1024) {
              newDocuments.push(asset);
            } else {
              Alert.alert("Error", `The file ${asset.name} exceeds the 4MB size limit.`);
            }
          }
    
          // Update the documents state
          setDocuments(newDocuments);
    
          // Update the formData state
          updateFormData(newDocuments);
    
          // Log the details of the uploaded files
          console.log("Uploaded Files:", newDocuments);
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "An error occurred while picking the document.");
      }
};
