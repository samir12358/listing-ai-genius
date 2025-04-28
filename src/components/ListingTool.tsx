
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { generateProductDetails } from '@/utils/aiUtils';
import { useToast } from "@/components/ui/use-toast";

interface ProductSize {
  value: string;
  label: string;
}

// Size options for different product types
const sizeOptions = {
  clothing: [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    { value: 'xl', label: 'XL' },
    { value: '2xl', label: '2XL' },
    { value: '3xl', label: '3XL' },
  ],
  footwear: [
    { value: '6', label: 'UK 6' },
    { value: '7', label: 'UK 7' },
    { value: '8', label: 'UK 8' },
    { value: '9', label: 'UK 9' },
    { value: '10', label: 'UK 10' },
    { value: '11', label: 'UK 11' },
    { value: '12', label: 'UK 12' },
  ],
  accessories: [
    { value: 'one-size', label: 'One Size' },
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ],
};

const materialOptions = [
  "Cotton",
  "Leather",
  "Synthetic",
  "Wool",
  "Polyester",
  "Nylon",
  "Silk",
  "Linen",
  "Denim",
  "Rubber",
  "Metal",
  "Glass",
  "Wood",
  "Plastic",
  "Canvas",
];

const ListingTool = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    productName: '',
    materialType: '',
    price: '',
    sizeType: 'clothing',
  });
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  
  // AI generated content
  const [aiData, setAiData] = useState<{
    title: string;
    description: string;
    features: string[];
    category: string;
    enhancedImages: string[];
  } | null>(null);
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSizeToggle = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };
  
  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
  
  const handleSizeTypeChange = (value: string) => {
    setFormData({ ...formData, sizeType: value });
    // Reset selected sizes when size type changes
    setSelectedSizes([]);
  };

  const handleGenerateAI = async () => {
    if (!selectedImage) {
      toast({
        title: "Image Required",
        description: "Please upload a product image first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // In a real app, you'd call your AI service here
      const aiGeneratedData = await generateProductDetails(
        selectedImage, 
        formData.productName || "Unknown Product", 
        formData.materialType
      );
      
      setAiData(aiGeneratedData);
      
      toast({
        title: "AI Generation Complete",
        description: "Your product listing has been created",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate AI content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleExport = (type: 'pdf' | 'csv') => {
    toast({
      title: "Export Initiated",
      description: `Your ${type.toUpperCase()} is being prepared for download.`,
    });
    // In a real app, you'd implement actual export functionality here
  };

  const getCurrentSizeOptions = () => {
    return sizeOptions[formData.sizeType as keyof typeof sizeOptions] || sizeOptions.clothing;
  };

  return (
    <section id="listing-tool" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Smart Product Listing Tool
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your product image, add a few details, and let AI do the rest
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-indiahub-blue mb-6">Upload Product Details</h3>
                  
                  {/* Image upload */}
                  <div className="mb-6">
                    <Label htmlFor="product-image" className="block mb-2">Product Image</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      {selectedImage ? (
                        <div className="relative">
                          <img 
                            src={selectedImage} 
                            alt="Product Preview" 
                            className="mx-auto h-64 object-contain rounded"
                          />
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="absolute top-2 right-2"
                            onClick={() => setSelectedImage(null)}
                          >
                            Change
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="mb-4 flex justify-center">
                            <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <Label 
                            htmlFor="product-image" 
                            className="cursor-pointer bg-indiahub-teal hover:bg-indiahub-blue text-white py-2 px-4 rounded transition-colors inline-block"
                          >
                            Upload Image
                          </Label>
                          <Input 
                            id="product-image" 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageChange}
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            Upload a clear image of your product (.jpg, .png)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Manual fields */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="product-name" className="block mb-1.5">Product Name</Label>
                      <Input 
                        id="product-name" 
                        placeholder="Enter product name"
                        value={formData.productName}
                        onChange={(e) => handleFormChange('productName', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="material" className="block mb-1.5">Material Type</Label>
                      <Select 
                        value={formData.materialType} 
                        onValueChange={(value) => handleFormChange('materialType', value)}
                      >
                        <SelectTrigger id="material">
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                          {materialOptions.map((material) => (
                            <SelectItem key={material} value={material.toLowerCase()}>
                              {material}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="price" className="block mb-1.5">Price (₹)</Label>
                      <Input 
                        id="price" 
                        type="number" 
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={(e) => handleFormChange('price', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="size-type" className="block mb-1.5">Size Type</Label>
                      <Select 
                        value={formData.sizeType} 
                        onValueChange={handleSizeTypeChange}
                      >
                        <SelectTrigger id="size-type">
                          <SelectValue placeholder="Select size type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clothing">Clothing (S, M, L)</SelectItem>
                          <SelectItem value="footwear">Footwear (6, 7, 8)</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="block mb-1.5">Sizes</Label>
                      <div className="flex flex-wrap gap-2">
                        {getCurrentSizeOptions().map((size) => (
                          <Badge
                            key={size.value}
                            variant={selectedSizes.includes(size.value) ? "default" : "outline"}
                            className={`cursor-pointer ${
                              selectedSizes.includes(size.value) 
                                ? "bg-indiahub-teal hover:bg-indiahub-teal/80" 
                                : "hover:bg-indiahub-teal/10"
                            }`}
                            onClick={() => handleSizeToggle(size.value)}
                          >
                            {size.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-indiahub-orange hover:bg-indiahub-gold text-indiahub-dark font-medium"
                      onClick={handleGenerateAI}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Generating...' : 'Generate AI Listing'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-indiahub-blue mb-6">AI Generated Listing</h3>
                  
                  {!aiData ? (
                    <div className="text-center py-12 px-4">
                      <div className="mb-4 flex justify-center">
                        <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">AI Generated Content Will Appear Here</h3>
                      <p className="text-gray-500 text-sm">
                        Upload a product image and fill in basic details, then click "Generate AI Listing"
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Tabs defaultValue="content" className="w-full">
                        <TabsList className="w-full mb-4">
                          <TabsTrigger value="content" className="flex-1">Content</TabsTrigger>
                          <TabsTrigger value="images" className="flex-1">Enhanced Images</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="content" className="space-y-6">
                          <div>
                            <Label className="text-sm text-gray-500">PRODUCT TITLE</Label>
                            <h4 className="text-lg font-semibold text-indiahub-blue">{aiData.title}</h4>
                          </div>
                          
                          <div>
                            <Label className="text-sm text-gray-500">CATEGORY</Label>
                            <p className="font-medium">{aiData.category}</p>
                          </div>
                          
                          <div>
                            <Label className="text-sm text-gray-500">DESCRIPTION</Label>
                            <p className="text-gray-700">{aiData.description}</p>
                          </div>
                          
                          <div>
                            <Label className="text-sm text-gray-500">KEY FEATURES</Label>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                              {aiData.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <Label htmlFor="custom-details" className="text-sm text-gray-500">ADD CUSTOM DETAILS (OPTIONAL)</Label>
                            <Textarea id="custom-details" placeholder="Add any additional details here..." className="mt-1" />
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="images" className="space-y-4">
                          <p className="text-sm text-gray-500 mb-2">
                            AI has generated enhanced versions of your product image:
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {aiData.enhancedImages.map((img, index) => (
                              <div key={index} className="border rounded overflow-hidden">
                                <img src={img} alt={`Enhanced product ${index + 1}`} className="w-full h-32 object-cover" />
                                <div className="p-2 text-xs text-center">Enhanced view {index + 1}</div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                      
                      <div className="mt-8 flex gap-3">
                        <Button 
                          className="flex-1 bg-indiahub-blue hover:bg-indiahub-teal transition-colors"
                          onClick={() => handleExport('pdf')}
                        >
                          Export as PDF
                        </Button>
                        <Button 
                          className="flex-1" 
                          variant="outline"
                          onClick={() => handleExport('csv')}
                        >
                          Export as CSV
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingTool;
