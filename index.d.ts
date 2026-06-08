declare class Config {
    /**
     * Creates a new Config object.
     *
     * @param file The path to the XML config file.
     */
    constructor(file: string);

    /**
     * Sets the ID of the config file.
     *
     * @param id The ID of the config file.
     */
    setID(id: string): void;

    /**
     * Sets the name tag of the config.xml file.
     *
     * @param name The name of the config.xml name tag.
     */
    setName(name: string): void;

    /**
     * Sets a named element in the config.xml file.
     *
     * @param tag The config.xml tag to set.
     * @param text The text to set.
     * @param attribs The attributes to set.
     */
    setElement(tag: string, text?: string, attribs?: Record<string, string>): void;

    /**
     * Sets a named element in the config.xml file.
     *
     * @param tag The config.xml tag to set.
     * @param attribs The attributes to set.
     */
    setElement(tag: string, attribs?: Record<string, string>): void;

    /**
     * Adds iOS query scheme in the config.xml file.
     *
     * @param schemeName Scheme name.
     */
    addIOSQueryScheme(schemeName: string): void;

    /**
     * Adds Android query package in the config.xml file.
     *
     * @param packageName Package name.
     */
    addAndroidQueryPackage(packageName: string): void;

    /**
     * Sets a plugin variable value in the config.xml file.
     *
     * @param pluginName Plugin name.
     * @param variableName Variable name.
     * @param variableValue Variable value.
     */
    setPluginVariable(pluginName: string, variableName: string, variableValue: any): void;

    /**
     * Sets the description tag of the config.xml file.
     *
     * @param description The description of the config.xml description tag.
     */
    setDescription(description: string): void;

    /**
     * Sets the author in the config file.
     *
     * @param name The name of the author.
     * @param email The email address of the author.
     * @param website The website of the author.
     */
    setAuthor(name: string, email?: string, website?: string): void;

    /**
     * Sets the version of the config file.
     *
     * @param version The version number.
     */
    setVersion(version: string): void;

    /**
     * Sets the Android version code of the config file.
     *
     * @param versionCode The android version code.
     */
    setAndroidVersionCode(versionCode: number | string): void;

    /**
     * Sets the Android package name of the config file.
     *
     * @param packageName The android package name.
     */
    setAndroidPackageName(packageName: string): void;

    /**
     * Sets the iOS CFBundleVersion of the config file.
     *
     * @param version The iOS CFBundleVersion.
     */
    setIOSBundleVersion(version: string): void;

    /**
     * Sets the iOS CFBundleIdentifier of the config file.
     *
     * @param identifier The iOS CFBundleIdentifier.
     */
    setIOSBundleIdentifier(identifier: string): void;

    /**
     * Adds or updates the preference `name` with the value.
     *
     * @param name The name of the preference.
     * @param value The value of the preference.
     */
    setPreference(name: string, value: any): void;

    /**
     * Removes all the <access /> tags out of the config file.
     */
    removeAccessOrigins(): void;

    /**
     * Removes the access origin tag from the XML file if it exists.
     *
     * @param origin The origin that should be removed.
     */
    removeAccessOrigin(origin: string): void;

    /**
     * Adds a new <access /> tag to the XML file. If an access tag with that origin
     * already exist, it will be overwritten.
     *
     * @param origin The origin of the access tag.
     * @param options Extra properties that should be added to the access tag.
     */
    setAccessOrigin(origin: string, options?: Record<string, string>): void;

    /**
     * Adds the hook with type and src.
     * see [Apache Cordova API Documentation](https://goo.gl/5QZlqu) for more info.
     *
     * @param type The cordova hook type.
     * @param src The source of the script.
     */
    addHook(type: string, src: string): void;

    /**
     * This method adds the raw XML provided to the config.xml file.
     *
     * @param raw The raw XML that should be added to the config file.
     */
    addRawXML(raw: string): void;

    /**
     * Writes the config file async.
     *
     * @returns A promise that resolves when the file is written.
     */
    write(): Promise<void>;

    /**
     * The same as `write` but sync.
     */
    writeSync(): void;
}

export = Config;
